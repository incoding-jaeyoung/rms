'use client';

import Link from 'next/link';

export default function LicensePage() {
  return (
    <div className="contents">
      <div className="center-container">
        <div className="contents-header">
          <h2>Open-Source License</h2>
        </div>
        <div className="license-contents">
          <h3>
            The following open-source software components may be included in this product. <br />{' '}
            Please refer to the corresponding license links for more details. <br /> If you have any
            questions, contact us at: https://www.examplecompany.com
          </h3>
          <div className="license-list">
            <dl>
              <dt>Apache License</dt>
              <dd>
                <Link href="https://www.apache.org/licenses/" target="_blank">
                  https://www.apache.org/licenses/
                </Link>
              </dd>
            </dl>
            <dl>
              <dt>GNU Lesser General Public License (LGPL)</dt>
              <dd>
                <Link href="https://www.gnu.org/licenses/lgpl.html" target="_blank">
                  https://www.gnu.org/licenses/lgpl.html
                </Link>
              </dd>
            </dl>
            <dl>
              <dt>Eclipse Public License 1.0</dt>
              <dd>
                <Link href="https://www.eclipse.org/legal/epl-v10.html" target="_blank">
                  https://www.eclipse.org/legal/epl-v10.html
                </Link>
              </dd>
            </dl>
            <dl>
              <dt>Eclipse Distribution License (EDL)</dt>
              <dd>
                <Link href="https://www.eclipse.org/org/documents/edl-v10.php" target="_blank">
                  https://www.eclipse.org/org/documents/edl-v10.php
                </Link>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
