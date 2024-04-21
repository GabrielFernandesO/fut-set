export default function SkeletonLoading({ numberOfItems }) {

  //variavel que cria um arrya com o numero de itens desejados para que seja utilizado no código, assim simula tamb´me um map
  //ja q aqui é um skeleton
  const skeletons = Array.from({ length: numberOfItems }, (_, index) => (
    <div key={index} className="space-y-2 pt-4">
      <h1 className="animate-pulse h-8 w-96 bg-gradient-to-r from-gray to-silver"></h1>
      <div className="space-y-2">
        <h3 className="animate-pulse h-4 w-82 bg-gradient-to-r from-gray to-silver"></h3>
        <h3 className="animate-pulse h-4 w-82 bg-gradient-to-r from-gray to-silver"></h3>
        <h3 className="animate-pulse h-4 w-82 bg-gradient-to-r from-gray to-silver"></h3>

      </div>

    </div>
  ));

  return <>{skeletons}</>;
}