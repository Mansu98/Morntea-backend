import "./featuredInfo.css";


export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Posts</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">25</span>
        </div>
        <span className="featuredSub">Total Posts</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Last week</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">4</span>
       
        </div>
        <span className="featuredSub">Compared to last week</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Last Month</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">17</span>  
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
