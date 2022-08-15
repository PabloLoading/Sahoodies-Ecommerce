import { capFirstLetter } from "../../helpers/strings"
import LinkedTitle from "../LinkedTitle/LinkedTitle"

const CategoryList=({categories=[]})=>{
    return (
        <ul>
            {categories.map(cat=><LinkedTitle target={`/category/${cat.name}`} key={cat.id} title={capFirstLetter(cat.name)}/>)}
        </ul>
    )
}
export default CategoryList