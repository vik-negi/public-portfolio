import {
  useEditor,
  EditorContent,
  FloatingMenu,
  BubbleMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import TextStyle from "@tiptap/extension-text-style";
import "../App.css";
const removeSpans = (text) => {
  const regexPattern = /<span\s*[^>]*>.*?<\/span>/g;

  return text.replaceAll(regexPattern, (match) => {
    if (
      (match?.includes("color: rgb(0, 123, 255)") &&
        match?.includes("<strong>") &&
        match?.includes("#")) ||
      match?.includes('data-type="mention"')
    ) {
      return match;
    }
    const startIndex = match?.indexOf(">");
    const endIndex = match?.indexOf("</span>");
    const innerText = match?.slice(startIndex + 1, endIndex);
    return innerText;
  });
};

const CustomEditor = ({ placeholder, onChange, value }) => {
  const editor = useEditor({
    content: `<p style="font-family: Poppins, sans-serif; color: #333; font-size: 8px;">${value}</p>
`,
    extensions: [
      StarterKit,

      TextStyle.configure({
        HTMLAttributes: {
          class: "editor-input",
        },
      }),
    ],
    editorProps: {
      transformPastedText: removeSpans,
      transformPastedHTML: removeSpans,
    },
    onUpdate({ editor }) {
      const modifiedText = removeSpans(editor.getHTML());
      editor.commands.setContent(modifiedText, false, {
        preserveWhitespace: "full",
      });
      onChange(modifiedText); // Update the parent component with the modified content
    },
  });

  useEffect(() => {
    editor.commands.setContent(value);
  }, [value]);

  return (
    <div className="rounded-[10px] text-[9px] w-full border-[1px]  border-[#e8e9fa] outline-none">
      <EditorContent
        style={{
          fontFamily: "Poppins, sans-serif",
          color: "#333",
          fontSize: "10px",
        }}
        className="outline-none text-[9px] "
        editor={editor}
        placeholder="Enter your text here"
        onChange={() => {
          onChange(editor.getHTML());
        }}
      />
      {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
      <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu> */}
    </div>
  );
};

export default CustomEditor;
