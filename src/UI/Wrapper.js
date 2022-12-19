import classes from "./Wrapper.module.css";

const Wrapper = (props) => {
  return (
    <section className={classes.section}>
      <div className="container">
        <div className="row">{props.children}</div>
      </div>
    </section>
  );
};

export default Wrapper;
