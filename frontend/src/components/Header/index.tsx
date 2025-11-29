import { type FC, useState, useRef, useEffect } from "react";
import logo from "@/assets/Logo.svg";
import editIcon from "@/assets/Edit_duotone.svg";

export interface HeaderProps {
  title: string;
  description: string;
  onUpdateTitle: (newTitle: string) => void;
  onUpdateDescription: (newDescription: string) => void;
}

export const Header: FC<HeaderProps> = ({
  title,
  description,
  onUpdateTitle,
  onUpdateDescription,
}) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [titleValue, setTitleValue] = useState(title);
  const [descriptionValue, setDescriptionValue] = useState(description);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTitleValue(title);
  }, [title]);

  useEffect(() => {
    setDescriptionValue(description);
  }, [description]);

  useEffect(() => {
    if (isEditingTitle && titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [isEditingTitle]);

  useEffect(() => {
    if (isEditingDescription && descriptionInputRef.current) {
      descriptionInputRef.current.focus();
    }
  }, [isEditingDescription]);

  const handleTitleBlur = () => {
    if (titleValue.trim().length > 0 && titleValue !== title) {
      onUpdateTitle(titleValue);
    } else {
      setTitleValue(title);
    }
    setIsEditingTitle(false);
  };

  const handleDescriptionBlur = () => {
    if (descriptionValue !== description) {
      onUpdateDescription(descriptionValue);
    }
    setIsEditingDescription(false);
  };

  return (
    <header className="flex gap-5 items-start">
      <img src={logo} alt="logo" />
      <div className="w-full">
        <h1 className="text-[40px] flex gap-4 leading-none mb-2 items-center">
          {isEditingTitle ? (
            <input
              ref={titleInputRef}
              type="text"
              value={titleValue}
              onChange={(e) => setTitleValue(e.target.value)}
              onBlur={handleTitleBlur}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleTitleBlur();
                }
              }}
              className="text-[40px] leading-none border-b-2 border-[#3662E3] outline-none flex-1 bg-transparent"
            />
          ) : (
            <>
              <span className="line-clamp-1">{title}</span>
              <button
                onClick={() => setIsEditingTitle(true)}
                className="interactive-element"
              >
                <img src={editIcon} alt="Edit title" />
              </button>
            </>
          )}
        </h1>
        {isEditingDescription ? (
          <input
            ref={descriptionInputRef}
            type="text"
            value={descriptionValue}
            onChange={(e) => setDescriptionValue(e.target.value)}
            onBlur={handleDescriptionBlur}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleDescriptionBlur();
              }
            }}
            className="w-full border-b-2 border-[#3662E3] outline-none bg-transparent"
          />
        ) : (
          <p
            onClick={() => setIsEditingDescription(true)}
            className="cursor-pointer hover:text-[#3662E3] transition-colors"
          >
            {description || "Add description..."}
          </p>
        )}
      </div>
    </header>
  );
};
