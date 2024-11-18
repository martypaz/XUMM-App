import { AccountModel, TrustLineModel } from '@store/models';

export interface Props {
    account: AccountModel;
    trustLine: TrustLineModel;
}

export interface State {
    isFavorite: boolean;
    isRemoving: boolean;
    isLoading: boolean;
    isReviewScreenVisible: boolean;
    hasXAppIdentifier: boolean;
    latestLineBalance: number;
    canRemove: boolean;
}