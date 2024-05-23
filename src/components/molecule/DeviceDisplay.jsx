function DeviceDisplay({ src, alt, version, className }) {
  return (
    <div className={`h-full flex flex-col items-center relative ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-full rounded-xl shadow-default border sm:w-full"
      />
      <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full sm:text-xs whitespace-nowrap">
        {version}
      </span>
    </div>
  );
}

export default DeviceDisplay;
