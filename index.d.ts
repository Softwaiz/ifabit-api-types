
export type ApiKey = {
  id: string;
  uid: string;
  label: string;
  public: string;
  private: string;
  extras: any;
  createdAt: Date;
};

export type Customer = {
  id: string;
  type: CustomerType;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  extras: any | null;
  emailVerified: boolean;
  phoneVerified: boolean;
  identityVerified: boolean;
  uid: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Wallet = {
  id: string;
  label: string | null;
  type: WalletType;
  currency: WalletCurrency;
  balance: number;
  uid: string;
  createdAt: Date;
  updatedAt: Date;
};

export type WalletOperation = {
  id: string;
  walletId: string;
  amount: number;
  label: string;
  createdAt: Date;
};

export type WalletTransfer = {
  id: string;
  label: string | null;
  currency: WalletCurrency;
  sent: number;
  received: number;
  tax: number;
  system: number;
  commission: number;
  pricing: any;
  senderName: string | null;
  receiverName: string | null;
  senderId: string;
  receiverId: string;
  senderHistoryId: string;
  receiverHistoryId: string;
  createdAt: Date;
};

export type TransferCommission = {
  id: string;
  amount: number;
  currency: string;
  walletId: string;
  transferId: string;
  createdAt: Date;
};

export type Invoice = {
  id: string;
  projectId: string | null;
  payeeId: string;
  payerId: string;
  amount: number;
  currency: string;
  payeeWalletId: string;
  label: string;
  extras: any | null;
  status: InvoiceStatus;
  transferId: string | null;
  createdAt: Date;
  updatedAt: Date | null;
  paidAt: Date | null;
  cancelledAt: Date | null;
};

export type Currency = {
  id: string;
  label: string;
  currency: string;
  floatingPoints: number;
  marketAlias: string;
  minAmount: number;
  maxAmount: number | null;
  buyEnabled: boolean;
  sellEnabled: boolean;
  sell: any;
  buy: any;
  feesIn: any | null;
  feesOut: any | null;
  sourceAddress: string | null;
  addressRegex: string;
  addressPrefix: string;
  provider: string;
  providerInternalCode: string | null;
  directPayment: boolean;
  type: string;
  logo: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type Exchange = {
  id: string;
  uid: string;
  from: any;
  to: any;
  amountSent: number;
  amountToReceive: number;
  appliedRate: any;
  senderAddress: string | null;
  receiverAddress: string;
  status: ExchangeStatus;
  createdAt: Date;
  updatedAt: Date;
  confirmedAt: Date | null;
  completedAt: Date | null;
  cancelledAt: Date | null;
};

export type ExchangeTransaction = {
  id: string;
  exchangeId: string;
  type: ExchangeTransactionType;
  txnId: string;
  amount: number;
  currency: string;
  address: string | null;
  extras: any | null;
  status: ExchangeTransactionStatus;
  createdAt: Date;
  updatedAt: Date;
  completedAt: Date | null;
  cancelledAt: Date | null;
};

export type Business = {
  id: string;
  label: string;
  website: string;
  country: string;
  ifu: string;
  rccm: string | null;
  uid: string;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date | null;
};

export enum UserPoolStatus {
  ACTIVE = "active",
  DISABLED = "disabled",
}


export enum CustomerType {
  BASIC = "basic",
  PARTNER = "partner",
}

export enum WalletType {
  BASIC = "basic",
  BUSINESS = "business",
}


export enum WalletCurrency {
  IFAXOF = "IFAXOF",
  IFAUSD = "IFAUSD",
}

export enum InvoiceStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  CANCELLED = "CANCELLED",
}

export enum ExchangeStatus {
  WAITING = "WAITING",
  CANCELLED = "CANCELLED",
  CONFIRMED = "CONFIRMED",
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
}

export enum ExchangeTransactionType {
  IN = "IN",
  OUT = "OUT",
}

export enum ExchangeTransactionStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}


export enum ValidationStatus {
  ACCEPTED = "accepted",
  PENDING = "pending",
  REJECTED = "rejected",
}

export type Project = {
  id: string;
  uid: string;
  businessId: string | null;
  label: string;
  website: string | null;
  wallet: string | null;
  webhook: string;
  secret: string;
  keyPairId: string;
  status: ProjectStatus;
  createdAt: Date;
  updatedAt: Date | null;
}

export enum ProjectStatus {
  TEST = "TEST",
  LIVE = "LIVE",
}

export type WebPaymentRequest = {
  id: string
  projectId: string
  label: string
  amount: number
  currency: string
  extras: any
  invoiceId: string | null
  createdAt: Date
  updatedAt: Date | null
}
