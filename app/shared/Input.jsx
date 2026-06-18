export default function Input({
  type = "text",
  name,
  placeholder = "",
  label,
  required = false,
  disabled = false,
  className = "",
  rows = 4,
  ...rest 
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-neutral-700"
        >
          {label}
        </label>
      )}

      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          rows={rows}
          className={`px-3 py-2 border border-neutral-300 rounded-md bg-white 
                      text-neutral-800 placeholder-neutral-400 
                      focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 
                      ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
          {...rest}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`px-3 py-2 border border-neutral-300 rounded-md bg-white 
                      text-neutral-800 placeholder-neutral-400 
                      focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 
                      ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
          {...rest}
        />
      )}
    </div>
  );
}