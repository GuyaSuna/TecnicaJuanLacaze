"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import type { Question } from "../content/faq";

export function Faq({ items }: { items: Question[] }) {
  const [open, setOpen] = useState<number>(0);
  const baseId = useId();

  return (
    <div className="faq">
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;
        return (
          <div className={`faq__item${isOpen ? " faq__item--open" : ""}`} key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : index)}
              >
                <span>{item.question}</span>
                <ChevronDown aria-hidden="true" />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
