export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          updated_at: string | null
          username: string | null
          description: string | null
          display_name: string | null
          avatar_url: string | null
          website: string | null
          signature: string | null
        }
        Insert: {
          id: string
          updated_at?: string | null
          username?: string | null
          description?: string | null
          display_name?: string | null
          avatar_url?: string | null
          website?: string | null
          signature?: string | null
        }
        Update: {
          id?: string
          updated_at?: string | null
          username?: string | null
          description?: string | null
          display_name?: string | null
          avatar_url?: string | null
          website?: string | null
          signature?: string | null
        }
      }
      replies: {
        Row: {
          id: string
          created_at: string | null
          created_by: string
          body: string
          post: string
        }
        Insert: {
          id?: string
          created_at?: string | null
          created_by: string
          body: string
          post: string
        }
        Update: {
          id?: string
          created_at?: string | null
          created_by?: string
          body?: string
          post?: string
        }
      }
      threads: {
        Row: {
          id: string
          created_at: string | null
          created_by: string
          title: string
          body: string
        }
        Insert: {
          id?: string
          created_at?: string | null
          created_by: string
          title: string
          body: string
        }
        Update: {
          id?: string
          created_at?: string | null
          created_by?: string
          title?: string
          body?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
