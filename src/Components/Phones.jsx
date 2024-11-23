import { Link, useLoaderData } from "react-router-dom";


const Phones = () => {

const phones = useLoaderData() ;

    return (
        <div>
          <h2>  All phones : {phones.length}</h2>
         <ul>
         {
            phones.map(phone => <li key={phone.id}><Link to={`/phone/${phone.id}`}>{phone.model}</Link></li>)
          }
         </ul>
        </div>
    );
};

export default Phones;