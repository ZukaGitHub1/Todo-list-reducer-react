import { useEffect, useState } from 'react'
import Loader from '../Components/Loader/Loader';
import Modal from '../Components/Modal/Modal';
import TodoApp from '../Components/TodoList/TodoApp';


function withLoading(Component) {
   return function WithLoading({ props }) {
      const [loading, setLoading] = useState(false);
      const [data, setData] = useState(null)

      useEffect(() => {
         fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
               const loadinterv = setInterval(() => setLoading(true), 1000)
               setData(data);

               console.log(data);
               return () => clearInterval(loadinterv)
            })
            .catch((err) => {
               console.log(err.message);
            });

      }, []);
      if (!loading) {
         return <Loader />
      } else {
         return <div>
            <Modal />
            <TodoApp />
            <Component loading={true} posts={data} />
         </div>
      }
   };


}


export default withLoading

