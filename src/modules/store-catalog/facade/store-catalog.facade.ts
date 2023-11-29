import StoreCatalogFacadeInterface, { FindAllStoreCatalogFacadeOutputDto, FindStoreCatalogFacadeInputDto, FindStoreCatalogFacadeOutputDto } from "../facade/store-catalog.facade.interface";
import FindAllProductUsecase from "../usecase/find-all-products/find-all-products.usecase";
import FindProductUsecase from "../usecase/find-product/find-product.usecase";

export interface UsecaseProps {
    findUsecase: FindProductUsecase,
    findAllUsecase: FindAllProductUsecase,
}

export default class StoreCatalogFacade implements StoreCatalogFacadeInterface {
    
    private _findUsecase: FindProductUsecase;
    private _findAllUsecase: FindAllProductUsecase;

    constructor(props: UsecaseProps) {
        this._findAllUsecase = props.findAllUsecase;
        this._findUsecase = props.findUsecase;
    }

    async find(id: FindStoreCatalogFacadeInputDto): Promise<FindStoreCatalogFacadeOutputDto> {
        return await this._findUsecase.execute(id);
    }
    async findAll(): Promise<FindAllStoreCatalogFacadeOutputDto> {
        return await this._findAllUsecase.execute();
    }

}