import { inject } from '@angular/core';
import { ActivatedRoute, CanActivateFn, Router } from '@angular/router';

export const userauthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const Route = inject(ActivatedRoute)
  const token:any = localStorage.getItem('token');
  if (token !== null) {
    const Role:string = JSON.parse(atob(token.split('.')[1]))['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    if (Role === "User") {
      return true;
    }else {
      router.navigate(['/auth/login'],{relativeTo:Route});
      return false;
    }
  } else {
    router.navigate(['/auth/login'],{relativeTo:Route});
    return false;
  }
};
