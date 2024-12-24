export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type UserRolesNames = Record<UserRole, string>;

const RoleDescription: UserRolesNames = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};
