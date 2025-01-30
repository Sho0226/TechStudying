import { studyDays } from "@/utils/days";
import Link from "next/link";

export default function Home() {
  const localStudyDays = studyDays;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">TechStudying in Next.js</h1>
      <ul className="space-y-4">
        {localStudyDays.map((day) => (
          <li key={day.date}>
            <Link
              href={`/study/${day.date}`} // 動的なパスを生成
              className="text-blue-500 hover:underline"
            >
              {day.title} {/* タイトルも動的に表示 */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
