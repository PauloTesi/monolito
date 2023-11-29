import ProductRepository from "../repository/product.repository";
import FindProductUsecase from "../usecase/find-product/find-product.usecase";
import FindAllProductUsecase from "../usecase//find-all-products/find-all-products.usecase";
import StoreCatalogFacade from "../facade/store-catalog.facade";

export default class StoreCatalogFacadeFactory {
    static create(): StoreCatalogFacade {
        const productRepository = new ProductRepository();
        const findUseCase = new FindProductUsecase(productRepository);
        const findAllUseCase = new FindAllProductUsecase(productRepository);
    
        const facade = new StoreCatalogFacade({
            findUsecase: findUseCase,
            findAllUsecase: findAllUseCase,
        });
        return facade;
    }
}