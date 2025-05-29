export default function RepoMindLogo({ className = "" }) {
  return (
    <span className={`font-bold inline-flex items-center gap-1 ${className}`}>
      <span className="text-blue-400">Repo</span>
      <span className="bg-black text-white px-1 rounded">Mind</span>
    </span>
  );
}
