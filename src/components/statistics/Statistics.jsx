export const Statistics = props => {
    return (
    <section class="statistics">
  <h2 class="title">{props.title}</h2>
  <ul class="stat-list">
  {props.stats.map( item => (
             <li className="item">
                 <span className="label">{item.label}</span>
                 <span className="percentage">{item.percentage}</span>
             </li>
            ))}
  </ul>
</section>
  );
};