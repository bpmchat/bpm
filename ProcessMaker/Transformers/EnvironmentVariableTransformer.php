<?php

namespace ProcessMaker\Transformers;

use League\Fractal\TransformerAbstract;
use ProcessMaker\Model\EnvironmentVariable;

/**
 * Transform a Environment Variable
 *
 * @package ProcessMaker\Transformer
 */
class EnvironmentVariableTransformer extends TransformerAbstract
{

    public function transform(EnvironmentVariable $variable)
    {
        return $variable->toArray();
    }

}