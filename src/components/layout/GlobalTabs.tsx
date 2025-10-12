'use client';

import { useState, useEffect } from 'react';
import { useTabs } from '@/contexts/TabContext';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { CloseOutlined } from '@ant-design/icons';

interface DraggableTabProps {
  tab: { id: string; label: string; closable: boolean };
  isActive: boolean;
  onSelect: (id: string) => void;
  onClose: (id: string) => void;
}

function DraggableTab({ tab, isActive, onSelect, onClose }: DraggableTabProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: tab.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClose(tab.id);
  };

  return (
    <div ref={setNodeRef} style={style} className={`tab-btn ${isActive ? 'active' : ''}`}>
      <span {...attributes} {...listeners} className="drag-handle">
        ⋮
      </span>
      <span onClick={() => onSelect(tab.id)} className="tab-label">
        {tab.label}
      </span>
      {tab.closable && (
        <CloseOutlined
          onClick={handleClose}
          onMouseDown={(e) => e.stopPropagation()}
          className="tab-close"
        />
      )}
    </div>
  );
}

export default function GlobalTabs() {
  const { tabs, activeTabId, setActiveTab, removeTab, reorderTabs } = useTabs();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = tabs.findIndex((tab) => tab.id === active.id);
      const newIndex = tabs.findIndex((tab) => tab.id === over.id);
      const newTabs = arrayMove(tabs, oldIndex, newIndex);
      reorderTabs(newTabs);
    }
  };

  if (!mounted) {
    return null; // 클라이언트 마운트 전까지 렌더링하지 않음
  }

  return (
    <div className="global-tabs">
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={tabs.map((t) => t.id)} strategy={horizontalListSortingStrategy}>
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <DraggableTab
                key={tab.id}
                tab={tab}
                isActive={activeTabId === tab.id}
                onSelect={setActiveTab}
                onClose={removeTab}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
