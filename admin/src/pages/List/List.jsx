import { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {
  
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);

      if (response) {
        setList(response.data.data);
      } else {
        toast.error("Error: Food lists not loaded.");
      }
    } catch (error) {
      toast.error("An error occurred while fetching the food list");
      console.error(error);
    }
  };


  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId })
    await fetchList()
    if (response) {
      toast.success("Food item remove")
    }
    else {
      toast.error("Error occur")
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>ALL Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className="list-table-format">
            <img src={`${url}/images/${item.image}`} alt="" className="food-image" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <button onClick={() => removeFood(item._id)} className="action-button">X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
