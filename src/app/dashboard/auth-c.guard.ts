import { inject } from '@angular/core';
import { ActivatedRoute, CanActivateChildFn, Router } from '@angular/router';

export const authCGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router)
  const token:any = localStorage.getItem('token');
  const Route = inject(ActivatedRoute)
  if (token !== null) {
    const Role:string = JSON.parse(atob(token.split('.')[1]))['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    if (Role === "Admin") {
      return true;
    }else {
      router.navigate(['auth/login'],{relativeTo:Route});
      return false;
    }
  } else {
    router.navigate(['auth/login'],{relativeTo:Route});
    return false;
  }
};
