export default function Week4() {
  return (
    <div>
      <div>
        <ChildOne param1="one" />
      </div>
      <div>
        <ChildTwo param1="two" />
      </div>
    </div>
  );
}

function ChildOne(props) {
  // console.log(props)
  const { param1 = "" } = props;
  return <div>ChildOne</div>;
}

function ChildTwo({ param1 = "" }) {
  console.log(param1);
  param1 = "";
  return <div>ChildTwo</div>;
}
