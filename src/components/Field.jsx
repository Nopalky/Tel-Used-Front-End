export default function Field({Icon, placeholder,name, type, value, onChange}) {
  return (
    <div className="field flex items-center">
      <Icon className="absolute ml-3" />
      <input
        type={type}
        className="border w-100 py-4 rounded-3xl pl-10 text-xl"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
