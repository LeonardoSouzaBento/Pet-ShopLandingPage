import { DifferentialItem } from "./DifferentialItem";

export function DifferentialsList({ differentials }) {
  return (
    <div className={`p-6 grid grid-cols-1 gap-5 min-[530px]:grid-cols-2 
    lg:grid-cols-4 bg-white rounded-2xl shadow-sm`}>
      {differentials.map((item, index) => (
        <DifferentialItem
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}
