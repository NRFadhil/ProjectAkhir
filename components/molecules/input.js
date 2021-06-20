import AtomsText from "../atoms/text";

export default function input({
  onChange,
  customClass,
  label,
  height,
  value = "Data",
  name,
  id,
  type,
  rows,
  border
}) {
  return (
    <>
      <label className={customClass} htmlFor={value} style={{ width: "100%" }}>
        {type !== "checkbox" ? (
          <Textk value={label ? label : value} size="18px" />
        ) : (
          ""
        )}
        {type == "textarea" ? (
          <textarea
            onChange={onChange}
            id={id}
            type={type}
            rows={rows ? rows : "5"}
            className="form-control mt-3"
            placeholder={`Enter Your ${value}`}
            style={{border: border ? border : "solid thin #eee"}}
          ></textarea>
        ) : (
          <input
            onChange={onChange}
            id={id}
            type={type}
            className="form-control mt-3"
            placeholder={`Enter Your ${value}`}
            style={{ height: height ? height : "48px", border: border ? border : "solid thin #eee" }}
          />
        )}
      </label>
    </>
  );
}
