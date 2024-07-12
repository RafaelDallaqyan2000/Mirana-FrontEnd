import React, { useEffect, useCallback, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { toast } from "react-toastify";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../Button";
import { updatesTaskDescription } from "../../../services";
import { makeStyles } from "@mui/styles";
import "./TextEditor.css";

const useStyle = makeStyles({
  span: {
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    fontFamily: "Montserrat",
    lineHeight: "21px",
    color: "rgba(64, 80, 81, 0.5)",
    marginLeft: "12px",
    fontFeatureSettings: "'tnum' on, 'onum' on",
  },
});

export function TextEditor({ taskId, defaultValue }) {
  const { control, handleSubmit, setValue } = useForm();
  const [text, setText] = useState(defaultValue);
  const [state, setState] = useState(true);
  const style = useStyle();

  useEffect(() => {
    // Do your request here
    if (defaultValue) {
      setText(defaultValue);
    }
  }, [defaultValue]);

  return (
    <div className="containerEditor">
      {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
      <Controller
        name="editor"
        control={control}
        defaultValue={text}
        render={({ onChange, value = "hellow" }) => (
          <div className="headerContainer">
            {state ? (
              <span
                dangerouslySetInnerHTML={{
                  __html: text ? text : "Add a description",
                }}
                className={style.span}
                onClick={() => setState(false)}
              ></span>
            ) : (
              <>
                <Editor
                  // id="editor99"
                  apiKey="b6hmke0x68ukdcd9pa5t6pvdcworvb0w06yw7xx6n5d6lzc4"
                  cloudChannel="dev"
                  init={{
                    selector: "textarea",
                    plugins:
                      "preview powerpaste casechange searchreplace autolink autosave" +
                      " save directionality advcode visualblocks visualchars fullscreen" +
                      " media mediaembed template codesample advtable table" +
                      " charmap pagebreak nonbreaking anchor advlist lists checklist" +
                      " wordcount tinymcespellchecker a11ychecker help formatpainter " +
                      "permanentpen pageembed linkchecker emoticons export",
                  }}
                  value={text}
                  onEditorChange={(content, editor) => {
                    onChange(content, editor);
                    setText(content);
                  }}
                  // onChange={(e) => {
                  //     setText(e.level.content)
                  //     console.log(e)
                  // }
                  // }
                />
                <div className="divOnButtons">
                  <Button
                    fontWeight="500"
                    width="80px"
                    height="40px"
                    fontSize="12px"
                    onClick={(e) =>
                      updatesTaskDescription(taskId, text, setState)
                    }
                  >
                    EDIT
                  </Button>
                  <Button
                    fontWeight="500"
                    width="80px"
                    height="40px"
                    fontSize="12px"
                    variant="outlinedPro"
                    onClick={() => setState(true)}
                  >
                    <span>Cancel</span>
                  </Button>
                </div>
              </>
            )}
          </div>
        )}
      />

      {/*</form>*/}
    </div>
  );
}
