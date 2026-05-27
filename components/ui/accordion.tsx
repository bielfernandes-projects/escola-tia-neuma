"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextType {
  value: string | null;
  onValueChange: (value: string | null) => void;
}

const AccordionContext = React.createContext<AccordionContextType | null>(null);

function useAccordion() {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion must be used within an <Accordion />");
  }
  return context;
}

interface AccordionItemContextType {
  itemValue: string;
}

const AccordionItemContext = React.createContext<AccordionItemContextType | null>(null);

function useAccordionItem() {
  const context = React.useContext(AccordionItemContext);
  if (!context) {
    throw new Error("useAccordionItem must be used within an <AccordionItem />");
  }
  return context;
}

function Accordion({
  className,
  children,
  collapsible = true,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  type?: "single";
  collapsible?: boolean;
  value?: string | null;
  onValueChange?: (value: string | null) => void;
}) {
  const [internalValue, setInternalValue] = React.useState<string | null>(null);
  const isControlled = props.value !== undefined;
  const value = isControlled ? props.value! : internalValue;
  const onValueChange = isControlled
    ? props.onValueChange!
    : setInternalValue;

  const handleValueChange = React.useCallback(
    (itemValue: string | null) => {
      if (!itemValue) return;
      if (value === itemValue && collapsible) {
        onValueChange(null);
      } else {
        onValueChange(itemValue);
      }
    },
    [value, onValueChange, collapsible]
  );

  return (
    <AccordionContext.Provider value={{ value, onValueChange: handleValueChange }}>
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({
  className,
  value,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { value: string }) {
  return (
    <AccordionItemContext.Provider value={{ itemValue: value }}>
      <div className={cn("border-b border-border", className)} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { value, onValueChange } = useAccordion();
  const { itemValue } = useAccordionItem();
  const isOpen = itemValue === value;

  return (
    <h3 className="flex">
      <button
        type="button"
        onClick={() => onValueChange(itemValue)}
        className={cn(
          "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline",
          className
        )}
        data-state={isOpen ? "open" : "closed"}
        {...props}
      >
        {children}
        <ChevronDown className={cn("h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200", isOpen && "rotate-180")} />
      </button>
    </h3>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { value } = useAccordion();
  const { itemValue } = useAccordionItem();
  const isOpen = itemValue === value;

  return (
    <div
      className={cn(
        "overflow-hidden text-sm transition-all duration-200",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        className
      )}
      data-state={isOpen ? "open" : "closed"}
      {...props}
    >
      <div className="pb-4 pt-0">
        {children}
      </div>
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
