<?php

namespace ProcessMaker\Policies;

use ProcessMaker\Model\Permission;
use ProcessMaker\Model\User;

class OutputDocumentPolicy
{
    /**
     * Determine if the Output Document can be read by the user.
     *
     * @param User $user
     * @return bool
     */
    public function read(User $user): bool
    {
        return $user->can('has-permission', [Permission::PM_FACTORY, Permission::PM_CASES]);
    }

    /**
     * Determine if the Output Document can be written by the user.
     *
     * @param User $user
     * @return bool
     */
    public function write(User $user): bool
    {
        return $user->can('has-permission', Permission::PM_FACTORY);
    }

    /**
     * Determine if the Output Document can be deleted by the user.
     *
     * @param User $user
     * @return bool
     */
    public function delete(User $user): bool
    {
        return $user->can('has-permission', Permission::PM_FACTORY);
    }

}
