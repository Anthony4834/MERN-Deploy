import './table.css';
import {Link} from '@reach/router';

const Table = ({pets, forceUpdate}) => {

    return(
        <table>
            <thead>
                <tr>
                    <th>Pet</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {pets.map((pet, index) => {
                    return(
                        <tr key={index}>
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            <td><span className="edit"><Link to={`/pet/${pet._id}/`}>Details</Link></span><span className="del">
                                <Link to={`/pet/${pet._id}/edit`}>Edit</Link></span></td>
                        </tr>
                    )
                })}     
            </tbody>
        </table>
    );
}

export default Table;