export default function PageTitle({ title }: Readonly<{ title: string }>) {
  return <div className="text-xl font-bold mb-8 p-4 border-b-2">{title}</div>;
}
