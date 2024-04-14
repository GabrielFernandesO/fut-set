export default function SkeletonLoading({ numberOfItems = 10 }) {

    //variavel que cria um arrya com o numero de itens desejados para que seja utilizado no código, assim simula tamb´me um map
    //ja q aqui é um skeleton
    const skeletons = Array.from({ length: numberOfItems }, (_, index) => (
      <div key={index} className="bg-white h-16 w-full flex items-center hover:bg-gray cursor-pointer animate-pulse">
        <div className="pl-4 pr-4 flex items-center justify-center space-x-4 p-1">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gray to-silver animate-pulse"></div>
          <h6 className="text-md w-32 h-3 bg-gradient-to-r from-gray to-silver animate-pulse"></h6>
        </div>
      </div>
    ));
  
    return <>{skeletons}</>;
  }