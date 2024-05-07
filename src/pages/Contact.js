import { useLocation } from "react-router-dom";

const Contact = () => {
  const queryString = useLocation().search;
  console.log(queryString);

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");
  console.log(name);
  return (
    <div>
      <h2>hey {name}, Contact us here</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
        inventore voluptates eveniet ducimus sit commodi, explicabo ad unde eius
        at minus rerum cumque numquam aut est eligendi possimus atque quam.
      </p>
    </div>
  );
};

export default Contact;
