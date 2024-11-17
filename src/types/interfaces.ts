export interface SearchResult {
    name: string;
    status: number;
    address: string;
    distance: string;
    phoneNumber: string;
    email: string;
    territory_number: number;
    accountManager?: string;
    latitude: number;
    longitude: number;
}