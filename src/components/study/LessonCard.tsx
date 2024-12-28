interface LessonCardProps {
  number: string;
  title: string;
  subtitle: string;
  imageUrl: string;
}

export function LessonCard({ number, title, subtitle, imageUrl }: LessonCardProps) {
  return (
    <div className="relative rounded-xl overflow-hidden">
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col justify-end">
        <p className="text-white/80 text-sm">Lição Nº {number}</p>
        <h2 className="text-white text-xl font-bold">{title}</h2>
        <p className="text-white/90 text-sm">{subtitle}</p>
      </div>
    </div>
  );
}