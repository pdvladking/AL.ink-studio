export default function GalleryItem ({ src, alt, category }) {
  return (
    <div className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition duration-300 ease-in-out">
      <img src={src} alt={alt || "Gallery image"} className="w-full h-64 object-cover" />
      {category && (
        <p className="text-xs text-gray-500 mt-2 text-center">{category}</p>
      )}
    </div>
  );
}