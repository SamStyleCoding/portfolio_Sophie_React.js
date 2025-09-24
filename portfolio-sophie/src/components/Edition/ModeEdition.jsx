export default function ModeEdition({isLoggedIn}) {

  return (
	<>
		{ isLoggedIn && (
			<div className="mode-edition">
				<p className="edition">Mode édition</p>
			</div>
		)}
	</>
  );
}
