import TransactionRepository from "../repository/transaction.repository";
import PaymentFacade from "../facade/payment.facade";
import PaymentFacadeInterface from "../facade/facade.interface";
import ProcessPaymentUseCase from "../usecase/process-payment/process-payment.usecase";

export default class PaymentFactory {
    static create(): PaymentFacadeInterface {
        const repository = new TransactionRepository();
        const usecase = new ProcessPaymentUseCase(repository);
        const facade = new PaymentFacade(usecase);
        return facade;
    }
}