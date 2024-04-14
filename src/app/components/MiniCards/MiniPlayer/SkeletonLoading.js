export default function SkeletonLoading({ numberOfItems = 20 }) {

    //variavel que cria um arrya com o numero de itens desejados para que seja utilizado no código, assim simula tamb´me um map
    //ja q aqui é um skeleton
    const skeletons = Array.from({ length: numberOfItems }, (_, index) => (
      <div className=" h-16 w-full flex items-center hover:bg-gray cursor-pointer animate-pulse" key={index}>
      <div className=" h-12 w-72   flex items-center justify-center text-center space-x-4">
          <div className="flex w-3/12  text-transparent justify-center items-center">
            <div className="h-12 w-12 bg-gradient-to-r from-gray to-silver text-transparent rounded-full animate-pulse"></div>
            <div className="h-4 w-4 bg-gradient-to-r from-gray to-silver text-transparent rounded-full animate-pulse mt-4"></div>
          </div>
          <h6 className="text-sm bg-gradient-to-r from-gray to-silver text-transparent h-2 w-20 w-1/2 animate-pulse">
          </h6>
          <h6 className="w-3/12 bg-gradient-to-r from-gray to-silver text-transparent h-2 w-10 animate-pulse"></h6>
      </div>
  </div>
    ));
  
    return <>{skeletons}</>;
  }