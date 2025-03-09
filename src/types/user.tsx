export interface ICurrentUser {
    id: string | number,
    name: string
    username: string
    email: string
    avatar: string
    banner: string
    about?: string
    phone?: string
    address?: string
    website?: string
    dob?: string
    company?: string
    createdAt: string
    updatedAt: string
    deleteAt: string | null
    isPremium: boolean
    status: string
    lstBookmarks: any[]
    lstFollowers: number
    lstFollowing: number
}