import type { AppUser } from "@/modules/user/types";

export function filterUsers(users: AppUser[], query: string, roleFilter: string): AppUser[] {
  return users.filter((user) => {
    const matchQuery = [user.name, user.email].join(" ").toLowerCase().includes(query.toLowerCase());
    const matchRole = roleFilter === "all" ? true : user.role === roleFilter;
    return matchQuery && matchRole;
  });
}

export function getUserStats(users: AppUser[], showing: number) {
  return {
    total: users.length,
    admins: users.filter((user) => user.role === "admin").length,
    regular: users.filter((user) => user.role === "user").length,
    showing
  };
}
