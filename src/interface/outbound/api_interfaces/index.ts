/* eslint-disable @typescript-eslint/no-namespace */
import { components } from './openapi'
export * as OutboundOpenAPI from './openapi'

export namespace Schemas {
  export type ErrorCode = components['schemas']['ErrorCode']
  export type ErrorDescription = components['schemas']['ErrorDescription']
  export type ExtensionKey = components['schemas']['ExtensionKey']
  export type ExtensionValue = components['schemas']['ExtensionValue']
  export type Extension = components['schemas']['Extension']
  export type ExtensionList = components['schemas']['ExtensionList']
  export type ErrorInformation = components['schemas']['ErrorInformation']
  export type ErrorInformationResponse = components['schemas']['ErrorInformationResponse']
  export type AuthenticationType = components['schemas']['AuthenticationType']
  export type Integer = components['schemas']['Integer']
  export type Currency = components['schemas']['Currency']
  export type Amount = components['schemas']['Amount']
  export type Money = components['schemas']['Money']
  export type CorrelationId = components['schemas']['CorrelationId']
  export type DateTime = components['schemas']['DateTime']
  export type Latitude = components['schemas']['Latitude']
  export type Longitude = components['schemas']['Longitude']
  export type GeoCode = components['schemas']['GeoCode']
  export type IlpPacket = components['schemas']['IlpPacket']
  export type IlpCondition = components['schemas']['IlpCondition']
  export type QuotesIDPutResponse = components['schemas']['QuotesIDPutResponse']
  export type AuthorizationsRequest = components['schemas']['AuthorizationsRequest']
  export type OtpValue = components['schemas']['OtpValue']
  export type QRCODE = components['schemas']['QRCODE']
  export type U2FPIN = components['schemas']['U2FPIN']
  export type U2FPinValue = components['schemas']['U2FPinValue']
  export type AuthenticationValue = components['schemas']['AuthenticationValue']
  export type AuthenticationInfo = components['schemas']['AuthenticationInfo']
  export type AuthorizationResponse = components['schemas']['AuthorizationResponse']
  export type AuthorizationsState = components['schemas']['AuthorizationsState']
  export type PartyIdType = components['schemas']['PartyIdType']
  export type PartyIdentifier = components['schemas']['PartyIdentifier']
  export type PartySubIdOrType = components['schemas']['PartySubIdOrType']
  export type FspId = components['schemas']['FspId']
  export type PartyIdInfo = components['schemas']['PartyIdInfo']
  export type ThirdpartyTransactionPartyLookupRequest = components['schemas']['ThirdpartyTransactionPartyLookupRequest']
  export type MerchantClassificationCode = components['schemas']['MerchantClassificationCode']
  export type PartyName = components['schemas']['PartyName']
  export type FirstName = components['schemas']['FirstName']
  export type MiddleName = components['schemas']['MiddleName']
  export type LastName = components['schemas']['LastName']
  export type PartyComplexName = components['schemas']['PartyComplexName']
  export type DateOfBirth = components['schemas']['DateOfBirth']
  export type PartyPersonalInfo = components['schemas']['PartyPersonalInfo']
  export type AccountAddress = components['schemas']['AccountAddress']
  export type Name = components['schemas']['Name']
  export type Account = components['schemas']['Account']
  export type AccountList = components['schemas']['AccountList']
  export type ThirdpartyTransactionPartyLookupResponseSuccess = components['schemas']['ThirdpartyTransactionPartyLookupResponseSuccess']
  export type ThirdpartyTransactionPartyLookupResponseError = components['schemas']['ThirdpartyTransactionPartyLookupResponseError']
  export type ThirdpartyTransactionPartyLookupResponse = components['schemas']['ThirdpartyTransactionPartyLookupResponse']
  export type ThirdpartyTransactionPartyLookupState = components['schemas']['ThirdpartyTransactionPartyLookupState']
  export type ThirdpartyTransactionState = components['schemas']['ThirdpartyTransactionState']
  export type Party = components['schemas']['Party']
  export type PartyIdTypeTPLink = components['schemas']['PartyIdTypeTPLink']
  export type PartyIdInfoTPLink = components['schemas']['PartyIdInfoTPLink']
  export type AmountType = components['schemas']['AmountType']
  export type TransactionScenario = components['schemas']['TransactionScenario']
  export type TransactionSubScenario = components['schemas']['TransactionSubScenario']
  export type TransactionInitiator = components['schemas']['TransactionInitiator']
  export type TransactionInitiatorType = components['schemas']['TransactionInitiatorType']
  export type RefundReason = components['schemas']['RefundReason']
  export type Refund = components['schemas']['Refund']
  export type BalanceOfPayments = components['schemas']['BalanceOfPayments']
  export type TransactionType = components['schemas']['TransactionType']
  export type ThirdpartyTransactionIDInitiateRequest = components['schemas']['ThirdpartyTransactionIDInitiateRequest']
  export type ThirdpartyTransactionIDInitiateState = components['schemas']['ThirdpartyTransactionIDInitiateState']
  export type ThirdpartyTransactionIDInitiateResponseError = components['schemas']['ThirdpartyTransactionIDInitiateResponseError']
  export type AuthorizationsPostRequest = components['schemas']['AuthorizationsPostRequest']
  export type ThirdpartyTransactionIDInitiateResponseSuccess = components['schemas']['ThirdpartyTransactionIDInitiateResponseSuccess']
  export type ThirdpartyTransactionIDInitiateResponse = components['schemas']['ThirdpartyTransactionIDInitiateResponse']
  export type AuthorizationsIDPutResponse = components['schemas']['AuthorizationsIDPutResponse']
  export type ThirdpartyTransactionIDApproveRequest = components['schemas']['ThirdpartyTransactionIDApproveRequest']
  export type TransactionRequestState = components['schemas']['TransactionRequestState']
  export type BinaryString = components['schemas']['BinaryString']
  export type ThirdpartyRequestsTransactionsIDAuthorizationsPostRequest = components['schemas']['ThirdpartyRequestsTransactionsIDAuthorizationsPostRequest']
  export type ThirdpartyRequestsTransactionsIDAuthorizationsPutResponse = components['schemas']['ThirdpartyRequestsTransactionsIDAuthorizationsPutResponse']
  export type AccountsIDPutResponse = components['schemas']['AccountsIDPutResponse']
  export type ConsentRequestsValidateRequest = components['schemas']['ConsentRequestsValidateRequest']
  export type ConsentScopeType = components['schemas']['ConsentScopeType']
  export type Scope = components['schemas']['Scope']
  export type ConsentsPostRequest = components['schemas']['ConsentsPostRequest']
  export type ConsentRequestsValidateState = components['schemas']['ConsentRequestsValidateState']
}
