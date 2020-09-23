import React from "react";
import "./PostAffiliateWidget.scss";
const PostAffiliateWidget = ({ href, anchor }) => (
  <div>
    <div className="recommended" data-reactroot>
      <fieldset>
        <legend className="leg-des">
          Flutter Daily recommended course
          <sub className="rec-icon">
            <svg
              fill="currentColor"
              preserveAspectRatio="xMidYMid meet"
              height="36px"
              width="36px"
              viewBox="0 0 40 40"
              style={{ verticalAlign: "middle" }}
            >
              <g>
                <path d="m22.5 30l4.8-4.8-7.3-7.7-8.4 8.4-11.6-15.9 11.6 10 8.4-8.7 10.2 11 4.8-4.8v12.5h-12.5z" />
              </g>
            </svg>
          </sub>
        </legend>
        <a target="new" rel="nofollow noopener noreferrer" href={href}>
          {anchor}
        </a>
      </fieldset>
    </div>
  </div>
);

export default PostAffiliateWidget;
