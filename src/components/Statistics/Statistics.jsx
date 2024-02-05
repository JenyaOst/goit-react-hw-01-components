
const Statistics = ({title, stats}) =>{
 return (
 <section >
        <h2 >Upload stats</h2>
        <ul>
    {stats.map (stat =>{
    return (

        
          <li>
            key={stat.id}
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </li>

    )})}
    </ul>
      </section> );
}
export {Statistics};