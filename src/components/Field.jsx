export default function Field({
  Icon,
  placeholder,
  name,
  type,
  value,
  onChange,
  error,
}) {
  return (
    <div>
      <div className="field flex items-center">
        <Icon className="absolute ml-3" />
        <input
          type={type}
          className={`border w-100 py-4 rounded-3xl pl-10 text-xl ${error ? "border-red-500" : ""}`}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          aria-invalid={!!error}
        />
      </div>
      {error && <p className="mt-1 ml-4 text-sm text-red-500">{error}</p>}
    </div>
  );
}
