export default function Title({ title, className = "" }) {
    return <h2 className={`text-[40px] sm:text-6xl font-black text-center mb-6 ${className}`}>{title}</h2>
}