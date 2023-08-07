import Button from "../components/Button";

function StartPathfindingBtn({settings}) {
  return <Button
    onClick={() => {settings.startPathfinding()}}
    content={<i class="fa fa-play"></i>}
    />
}

export default StartPathfindingBtn;