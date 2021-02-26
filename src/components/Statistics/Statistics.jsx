import Proptypes from 'prop-types';
import s from "./Statistics.module.css"

const Statistics = ({ title, data }) => {

  const colors = [
    "rgb(80, 195, 252)",
    "rgb(164, 60, 243)",
    "rgb(232, 75, 106)",
    "rgb(32, 184, 197)",
    "rgb(220, 61, 186)",
  ];
    
  return (
    <>
      <section className={s.stats}>
        <h2 className={s.title}>{title}</h2>

        <ul className={s.statList}>
          {data.map((stat, color) => (
            <li key={stat.id} className={s.listItem} style={{ backgroundColor: colors[color] }}>
              <span className={s.label}>{stat.label}</span>
              <span className={s.percentage}>{stat.percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
    title: Proptypes.string,
    data: Proptypes.array.isRequired,
}

export default Statistics;
