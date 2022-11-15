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
          updated_at: string
          username: string
          description: string | null
          display_name: string
          avatar_url: string | null
          website: string | null
          signature: string | null
        }
        Insert: {
          id: string
          updated_at?: string
          username: string
          description?: string | null
          display_name: string
          avatar_url?: string | null
          website?: string | null
          signature?: string | null
        }
        Update: {
          id?: string
          updated_at?: string
          username?: string
          description?: string | null
          display_name?: string
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
          thread_id: string
          updated_at: string | null
        }
        Insert: {
          id?: string
          created_at?: string | null
          created_by: string
          body: string
          thread_id: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          created_at?: string | null
          created_by?: string
          body?: string
          thread_id?: string
          updated_at?: string | null
        }
      }
      threads: {
        Row: {
          id: string
          created_at: string | null
          created_by: string
          title: string
          body: string
          categories: string[] | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          created_at?: string | null
          created_by: string
          title: string
          body: string
          categories?: string[] | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          created_at?: string | null
          created_by?: string
          title?: string
          body?: string
          categories?: string[] | null
          updated_at?: string | null
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
